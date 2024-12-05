# `dataOciContainerengineNodePools` Submodule <a name="`dataOciContainerengineNodePools` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerengineNodePools <a name="DataOciContainerengineNodePools" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools oci_containerengine_node_pools}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePools;

DataOciContainerengineNodePools.Builder.create(Construct scope, java.lang.String id)
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
//  .clusterId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciContainerengineNodePoolsFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .state(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#compartment_id DataOciContainerengineNodePools#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#cluster_id DataOciContainerengineNodePools#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#id DataOciContainerengineNodePools#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#name DataOciContainerengineNodePools#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.state">state</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#state DataOciContainerengineNodePools#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#compartment_id DataOciContainerengineNodePools#compartment_id}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.clusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#cluster_id DataOciContainerengineNodePools#cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#filter DataOciContainerengineNodePools#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#id DataOciContainerengineNodePools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#name DataOciContainerengineNodePools#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.state"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#state DataOciContainerengineNodePools#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetClusterId">resetClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciContainerengineNodePoolsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>>

---

##### `resetClusterId` <a name="resetClusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetClusterId"></a>

```java
public void resetClusterId()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetName"></a>

```java
public void resetName()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciContainerengineNodePools resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePools;

DataOciContainerengineNodePools.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePools;

DataOciContainerengineNodePools.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePools;

DataOciContainerengineNodePools.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePools;

DataOciContainerengineNodePools.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciContainerengineNodePools.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciContainerengineNodePools resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciContainerengineNodePools to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciContainerengineNodePools that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerengineNodePools to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList">DataOciContainerengineNodePoolsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.nodePools">nodePools</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList">DataOciContainerengineNodePoolsNodePoolsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.clusterIdInput">clusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.stateInput">stateInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.state">state</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.filter"></a>

```java
public DataOciContainerengineNodePoolsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList">DataOciContainerengineNodePoolsFilterList</a>

---

##### `nodePools`<sup>Required</sup> <a name="nodePools" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.nodePools"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsList getNodePools();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList">DataOciContainerengineNodePoolsNodePoolsList</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.clusterIdInput"></a>

```java
public java.lang.String getClusterIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.stateInput"></a>

```java
public java.util.List<java.lang.String> getStateInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.state"></a>

```java
public java.util.List<java.lang.String> getState();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerengineNodePoolsConfig <a name="DataOciContainerengineNodePoolsConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsConfig;

DataOciContainerengineNodePoolsConfig.builder()
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
//  .clusterId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciContainerengineNodePoolsFilter>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .state(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#compartment_id DataOciContainerengineNodePools#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#cluster_id DataOciContainerengineNodePools#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#id DataOciContainerengineNodePools#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#name DataOciContainerengineNodePools#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.state">state</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#state DataOciContainerengineNodePools#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#compartment_id DataOciContainerengineNodePools#compartment_id}.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#cluster_id DataOciContainerengineNodePools#cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#filter DataOciContainerengineNodePools#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#id DataOciContainerengineNodePools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#name DataOciContainerengineNodePools#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.state"></a>

```java
public java.util.List<java.lang.String> getState();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#state DataOciContainerengineNodePools#state}.

---

### DataOciContainerengineNodePoolsFilter <a name="DataOciContainerengineNodePoolsFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsFilter;

DataOciContainerengineNodePoolsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#name DataOciContainerengineNodePools#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#values DataOciContainerengineNodePools#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#regex DataOciContainerengineNodePools#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#name DataOciContainerengineNodePools#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#values DataOciContainerengineNodePools#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#regex DataOciContainerengineNodePools#regex}.

---

### DataOciContainerengineNodePoolsNodePools <a name="DataOciContainerengineNodePoolsNodePools" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePools"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePools.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePools;

DataOciContainerengineNodePoolsNodePools.builder()
    .build();
```


### DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels <a name="DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels;

DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels.builder()
    .build();
```


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails;

DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails.builder()
    .build();
```


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails;

DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails.builder()
    .build();
```


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs;

DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs.builder()
    .build();
```


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig;

DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig.builder()
    .build();
```


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction;

DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.builder()
    .build();
```


### DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings <a name="DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings;

DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings.builder()
    .build();
```


### DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails <a name="DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails;

DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails.builder()
    .build();
```


### DataOciContainerengineNodePoolsNodePoolsNodes <a name="DataOciContainerengineNodePoolsNodePoolsNodes" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodes;

DataOciContainerengineNodePoolsNodePoolsNodes.builder()
    .build();
```


### DataOciContainerengineNodePoolsNodePoolsNodesError <a name="DataOciContainerengineNodePoolsNodePoolsNodesError" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesError"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesError.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodesError;

DataOciContainerengineNodePoolsNodePoolsNodesError.builder()
    .build();
```


### DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig <a name="DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig;

DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig.builder()
    .build();
```


### DataOciContainerengineNodePoolsNodePoolsNodeSource <a name="DataOciContainerengineNodePoolsNodePoolsNodeSource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeSource;

DataOciContainerengineNodePoolsNodePoolsNodeSource.builder()
    .build();
```


### DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails <a name="DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails;

DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerengineNodePoolsFilterList <a name="DataOciContainerengineNodePoolsFilterList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsFilterList;

new DataOciContainerengineNodePoolsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.get"></a>

```java
public DataOciContainerengineNodePoolsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>>

---


### DataOciContainerengineNodePoolsFilterOutputReference <a name="DataOciContainerengineNodePoolsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsFilterOutputReference;

new DataOciContainerengineNodePoolsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>

---


### DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList <a name="DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList;

new DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.get"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference;

new DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels">DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.internalValue"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels">DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels</a>

---


### DataOciContainerengineNodePoolsNodePoolsList <a name="DataOciContainerengineNodePoolsNodePoolsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsList;

new DataOciContainerengineNodePoolsNodePoolsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.get"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.get"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.get"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniType">cniType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNode">maxPodsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIds">podNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIds">podSubnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cniType`<sup>Required</sup> <a name="cniType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniType"></a>

```java
public java.lang.String getCniType();
```

- *Type:* java.lang.String

---

##### `maxPodsPerNode`<sup>Required</sup> <a name="maxPodsPerNode" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNode"></a>

```java
public java.lang.Number getMaxPodsPerNode();
```

- *Type:* java.lang.Number

---

##### `podNsgIds`<sup>Required</sup> <a name="podNsgIds" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIds"></a>

```java
public java.util.List<java.lang.String> getPodNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `podSubnetIds`<sup>Required</sup> <a name="podSubnetIds" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIds"></a>

```java
public java.util.List<java.lang.String> getPodSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.internalValue"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabled">isPvEncryptionInTransitEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetails">nodePoolPodNetworkOptionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.placementConfigs">placementConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `isPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="isPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```java
public IResolvable getIsPvEncryptionInTransitEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `nodePoolPodNetworkOptionDetails`<sup>Required</sup> <a name="nodePoolPodNetworkOptionDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetails"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList getNodePoolPodNetworkOptionDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList</a>

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `placementConfigs`<sup>Required</sup> <a name="placementConfigs" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.placementConfigs"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList getPlacementConfigs();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList</a>

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.internalValue"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.get"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationId">capacityReservationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomains">faultDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfig">preemptibleNodeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `capacityReservationId`<sup>Required</sup> <a name="capacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationId"></a>

```java
public java.lang.String getCapacityReservationId();
```

- *Type:* java.lang.String

---

##### `faultDomains`<sup>Required</sup> <a name="faultDomains" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomains"></a>

```java
public java.util.List<java.lang.String> getFaultDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `preemptibleNodeConfig`<sup>Required</sup> <a name="preemptibleNodeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfig"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList getPreemptibleNodeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList</a>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.internalValue"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.get"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionAction">preemptionAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `preemptionAction`<sup>Required</sup> <a name="preemptionAction" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionAction"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList getPreemptionAction();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.internalValue"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.get"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference;

new DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolume">isPreserveBootVolume</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isPreserveBootVolume`<sup>Required</sup> <a name="isPreserveBootVolume" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolume"></a>

```java
public IResolvable getIsPreserveBootVolume();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.internalValue"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList <a name="DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList;

new DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.get"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference;

new DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDuration">evictionGraceDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDuration">isForceDeleteAfterGraceDuration</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings">DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evictionGraceDuration`<sup>Required</sup> <a name="evictionGraceDuration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDuration"></a>

```java
public java.lang.String getEvictionGraceDuration();
```

- *Type:* java.lang.String

---

##### `isForceDeleteAfterGraceDuration`<sup>Required</sup> <a name="isForceDeleteAfterGraceDuration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDuration"></a>

```java
public IResolvable getIsForceDeleteAfterGraceDuration();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.internalValue"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings">DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList <a name="DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList;

new DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.get"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference;

new DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabled">isNodeCyclingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.maximumSurge">maximumSurge</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.maximumUnavailable">maximumUnavailable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails">DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isNodeCyclingEnabled`<sup>Required</sup> <a name="isNodeCyclingEnabled" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabled"></a>

```java
public IResolvable getIsNodeCyclingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `maximumSurge`<sup>Required</sup> <a name="maximumSurge" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.maximumSurge"></a>

```java
public java.lang.String getMaximumSurge();
```

- *Type:* java.lang.String

---

##### `maximumUnavailable`<sup>Required</sup> <a name="maximumUnavailable" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.maximumUnavailable"></a>

```java
public java.lang.String getMaximumUnavailable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.internalValue"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails">DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodesErrorList <a name="DataOciContainerengineNodePoolsNodePoolsNodesErrorList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList;

new DataOciContainerengineNodePoolsNodePoolsNodesErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.get"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference;

new DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.code">code</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesError">DataOciContainerengineNodePoolsNodePoolsNodesError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.code"></a>

```java
public java.lang.String getCode();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.internalValue"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodesError getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesError">DataOciContainerengineNodePoolsNodePoolsNodesError</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList <a name="DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList;

new DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.get"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference;

new DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.memoryInGbs">memoryInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig">DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `memoryInGbs`<sup>Required</sup> <a name="memoryInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```java
public java.lang.Number getMemoryInGbs();
```

- *Type:* java.lang.Number

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.ocpus"></a>

```java
public java.lang.Number getOcpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.internalValue"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig">DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodesList <a name="DataOciContainerengineNodePoolsNodePoolsNodesList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodesList;

new DataOciContainerengineNodePoolsNodePoolsNodesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.get"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList <a name="DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList;

new DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.get"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference;

new DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbs">bootVolumeSizeInGbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails">DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bootVolumeSizeInGbs`<sup>Required</sup> <a name="bootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbs"></a>

```java
public java.lang.String getBootVolumeSizeInGbs();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.internalValue"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails">DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeSourceList <a name="DataOciContainerengineNodePoolsNodePoolsNodeSourceList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList;

new DataOciContainerengineNodePoolsNodePoolsNodeSourceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.get"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference;

new DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSource">DataOciContainerengineNodePoolsNodePoolsNodeSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.internalValue"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeSource getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSource">DataOciContainerengineNodePoolsNodePoolsNodeSource</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodesOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference;

new DataOciContainerengineNodePoolsNodePoolsNodesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.error">error</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList">DataOciContainerengineNodePoolsNodePoolsNodesErrorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.faultDomain">faultDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.kubernetesVersion">kubernetesVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.nodePoolId">nodePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.publicIp">publicIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodes">DataOciContainerengineNodePoolsNodePoolsNodes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.error"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodesErrorList getError();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList">DataOciContainerengineNodePoolsNodePoolsNodesErrorList</a>

---

##### `faultDomain`<sup>Required</sup> <a name="faultDomain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.faultDomain"></a>

```java
public java.lang.String getFaultDomain();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.kubernetesVersion"></a>

```java
public java.lang.String getKubernetesVersion();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodePoolId`<sup>Required</sup> <a name="nodePoolId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.nodePoolId"></a>

```java
public java.lang.String getNodePoolId();
```

- *Type:* java.lang.String

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.publicIp"></a>

```java
public java.lang.String getPublicIp();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.internalValue"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodes">DataOciContainerengineNodePoolsNodePoolsNodes</a>

---


### DataOciContainerengineNodePoolsNodePoolsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_containerengine_node_pools.DataOciContainerengineNodePoolsNodePoolsOutputReference;

new DataOciContainerengineNodePoolsNodePoolsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.clusterId">clusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.initialNodeLabels">initialNodeLabels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList">DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.kubernetesVersion">kubernetesVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeConfigDetails">nodeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeEvictionNodePoolSettings">nodeEvictionNodePoolSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList">DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeImageId">nodeImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeImageName">nodeImageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeMetadata">nodeMetadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodePoolCyclingDetails">nodePoolCyclingDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList">DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodePoolId">nodePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodes">nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList">DataOciContainerengineNodePoolsNodePoolsNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeShape">nodeShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeShapeConfig">nodeShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList">DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeSource">nodeSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList">DataOciContainerengineNodePoolsNodePoolsNodeSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeSourceDetails">nodeSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList">DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.quantityPerSubnet">quantityPerSubnet</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePools">DataOciContainerengineNodePoolsNodePools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.clusterId"></a>

```java
public java.lang.String getClusterId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initialNodeLabels`<sup>Required</sup> <a name="initialNodeLabels" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.initialNodeLabels"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList getInitialNodeLabels();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList">DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList</a>

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.kubernetesVersion"></a>

```java
public java.lang.String getKubernetesVersion();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeConfigDetails`<sup>Required</sup> <a name="nodeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeConfigDetails"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList getNodeConfigDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList</a>

---

##### `nodeEvictionNodePoolSettings`<sup>Required</sup> <a name="nodeEvictionNodePoolSettings" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeEvictionNodePoolSettings"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList getNodeEvictionNodePoolSettings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList">DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList</a>

---

##### `nodeImageId`<sup>Required</sup> <a name="nodeImageId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeImageId"></a>

```java
public java.lang.String getNodeImageId();
```

- *Type:* java.lang.String

---

##### `nodeImageName`<sup>Required</sup> <a name="nodeImageName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeImageName"></a>

```java
public java.lang.String getNodeImageName();
```

- *Type:* java.lang.String

---

##### `nodeMetadata`<sup>Required</sup> <a name="nodeMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeMetadata"></a>

```java
public StringMap getNodeMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `nodePoolCyclingDetails`<sup>Required</sup> <a name="nodePoolCyclingDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodePoolCyclingDetails"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList getNodePoolCyclingDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList">DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList</a>

---

##### `nodePoolId`<sup>Required</sup> <a name="nodePoolId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodePoolId"></a>

```java
public java.lang.String getNodePoolId();
```

- *Type:* java.lang.String

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodes"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodesList getNodes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList">DataOciContainerengineNodePoolsNodePoolsNodesList</a>

---

##### `nodeShape`<sup>Required</sup> <a name="nodeShape" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeShape"></a>

```java
public java.lang.String getNodeShape();
```

- *Type:* java.lang.String

---

##### `nodeShapeConfig`<sup>Required</sup> <a name="nodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeShapeConfig"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList getNodeShapeConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList">DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList</a>

---

##### `nodeSource`<sup>Required</sup> <a name="nodeSource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeSource"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeSourceList getNodeSource();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList">DataOciContainerengineNodePoolsNodePoolsNodeSourceList</a>

---

##### `nodeSourceDetails`<sup>Required</sup> <a name="nodeSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeSourceDetails"></a>

```java
public DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList getNodeSourceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList">DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList</a>

---

##### `quantityPerSubnet`<sup>Required</sup> <a name="quantityPerSubnet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.quantityPerSubnet"></a>

```java
public java.lang.Number getQuantityPerSubnet();
```

- *Type:* java.lang.Number

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.sshPublicKey"></a>

```java
public java.lang.String getSshPublicKey();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.internalValue"></a>

```java
public DataOciContainerengineNodePoolsNodePools getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePools">DataOciContainerengineNodePoolsNodePools</a>

---



