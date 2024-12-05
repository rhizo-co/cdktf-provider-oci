# `dataOciCoreClusterNetworks` Submodule <a name="`dataOciCoreClusterNetworks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreClusterNetworks <a name="DataOciCoreClusterNetworks" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks oci_core_cluster_networks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworks;

DataOciCoreClusterNetworks.Builder.create(Construct scope, java.lang.String id)
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
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreClusterNetworksFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#compartment_id DataOciCoreClusterNetworks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#display_name DataOciCoreClusterNetworks#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter">DataOciCoreClusterNetworksFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#id DataOciCoreClusterNetworks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#state DataOciCoreClusterNetworks#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#compartment_id DataOciCoreClusterNetworks#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#display_name DataOciCoreClusterNetworks#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter">DataOciCoreClusterNetworksFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#filter DataOciCoreClusterNetworks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#id DataOciCoreClusterNetworks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#state DataOciCoreClusterNetworks#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCoreClusterNetworksFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter">DataOciCoreClusterNetworksFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreClusterNetworks resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworks;

DataOciCoreClusterNetworks.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworks;

DataOciCoreClusterNetworks.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworks;

DataOciCoreClusterNetworks.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworks;

DataOciCoreClusterNetworks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreClusterNetworks.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreClusterNetworks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreClusterNetworks to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreClusterNetworks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreClusterNetworks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.clusterNetworks">clusterNetworks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList">DataOciCoreClusterNetworksClusterNetworksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList">DataOciCoreClusterNetworksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter">DataOciCoreClusterNetworksFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `clusterNetworks`<sup>Required</sup> <a name="clusterNetworks" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.clusterNetworks"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksList getClusterNetworks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList">DataOciCoreClusterNetworksClusterNetworksList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.filter"></a>

```java
public DataOciCoreClusterNetworksFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList">DataOciCoreClusterNetworksFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter">DataOciCoreClusterNetworksFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworks.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreClusterNetworksClusterNetworks <a name="DataOciCoreClusterNetworksClusterNetworks" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworks;

DataOciCoreClusterNetworksClusterNetworks.builder()
    .build();
```


### DataOciCoreClusterNetworksClusterNetworksClusterConfiguration <a name="DataOciCoreClusterNetworksClusterNetworksClusterConfiguration" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksClusterConfiguration;

DataOciCoreClusterNetworksClusterNetworksClusterConfiguration.builder()
    .build();
```


### DataOciCoreClusterNetworksClusterNetworksInstancePools <a name="DataOciCoreClusterNetworksClusterNetworksInstancePools" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePools"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePools.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePools;

DataOciCoreClusterNetworksClusterNetworksInstancePools.builder()
    .build();
```


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancers <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancers;

DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancers.builder()
    .build();
```


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurations <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurations;

DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurations.builder()
    .build();
```


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnets <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnets;

DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnets.builder()
    .build();
```


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails;

DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.builder()
    .build();
```


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnets <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnets;

DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnets.builder()
    .build();
```


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails;

DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.builder()
    .build();
```


### DataOciCoreClusterNetworksClusterNetworksPlacementConfiguration <a name="DataOciCoreClusterNetworksClusterNetworksPlacementConfiguration" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksPlacementConfiguration;

DataOciCoreClusterNetworksClusterNetworksPlacementConfiguration.builder()
    .build();
```


### DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnets <a name="DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnets;

DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnets.builder()
    .build();
```


### DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails <a name="DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails;

DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.builder()
    .build();
```


### DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnets <a name="DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnets.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnets;

DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnets.builder()
    .build();
```


### DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails <a name="DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails;

DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails.builder()
    .build();
```


### DataOciCoreClusterNetworksConfig <a name="DataOciCoreClusterNetworksConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksConfig;

DataOciCoreClusterNetworksConfig.builder()
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
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreClusterNetworksFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#compartment_id DataOciCoreClusterNetworks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#display_name DataOciCoreClusterNetworks#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter">DataOciCoreClusterNetworksFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#id DataOciCoreClusterNetworks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#state DataOciCoreClusterNetworks#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#compartment_id DataOciCoreClusterNetworks#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#display_name DataOciCoreClusterNetworks#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter">DataOciCoreClusterNetworksFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#filter DataOciCoreClusterNetworks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#id DataOciCoreClusterNetworks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#state DataOciCoreClusterNetworks#state}.

---

### DataOciCoreClusterNetworksFilter <a name="DataOciCoreClusterNetworksFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksFilter;

DataOciCoreClusterNetworksFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#name DataOciCoreClusterNetworks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#values DataOciCoreClusterNetworks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#regex DataOciCoreClusterNetworks#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#name DataOciCoreClusterNetworks#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#values DataOciCoreClusterNetworks#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_cluster_networks#regex DataOciCoreClusterNetworks#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList <a name="DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList;

new DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.get"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference <a name="DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference;

new DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.property.hpcIslandId">hpcIslandId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.property.networkBlockIds">networkBlockIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfiguration">DataOciCoreClusterNetworksClusterNetworksClusterConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hpcIslandId`<sup>Required</sup> <a name="hpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.property.hpcIslandId"></a>

```java
public java.lang.String getHpcIslandId();
```

- *Type:* java.lang.String

---

##### `networkBlockIds`<sup>Required</sup> <a name="networkBlockIds" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.property.networkBlockIds"></a>

```java
public java.util.List<java.lang.String> getNetworkBlockIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationOutputReference.property.internalValue"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksClusterConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfiguration">DataOciCoreClusterNetworksClusterNetworksClusterConfiguration</a>

---


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsList <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList;

new DataOciCoreClusterNetworksClusterNetworksInstancePoolsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.get"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList;

new DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.get"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference;

new DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.backendSetName">backendSetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.instancePoolId">instancePoolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.loadBalancerId">loadBalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.vnicSelection">vnicSelection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancers">DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendSetName`<sup>Required</sup> <a name="backendSetName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.backendSetName"></a>

```java
public java.lang.String getBackendSetName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instancePoolId`<sup>Required</sup> <a name="instancePoolId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.instancePoolId"></a>

```java
public java.lang.String getInstancePoolId();
```

- *Type:* java.lang.String

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.loadBalancerId"></a>

```java
public java.lang.String getLoadBalancerId();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `vnicSelection`<sup>Required</sup> <a name="vnicSelection" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.vnicSelection"></a>

```java
public java.lang.String getVnicSelection();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersOutputReference.property.internalValue"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancers getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancers">DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancers</a>

---


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference;

new DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.instanceConfigurationId">instanceConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.instanceDisplayNameFormatter">instanceDisplayNameFormatter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.instanceHostnameFormatter">instanceHostnameFormatter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.loadBalancers">loadBalancers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList">DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.placementConfigurations">placementConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePools">DataOciCoreClusterNetworksClusterNetworksInstancePools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceConfigurationId`<sup>Required</sup> <a name="instanceConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.instanceConfigurationId"></a>

```java
public java.lang.String getInstanceConfigurationId();
```

- *Type:* java.lang.String

---

##### `instanceDisplayNameFormatter`<sup>Required</sup> <a name="instanceDisplayNameFormatter" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.instanceDisplayNameFormatter"></a>

```java
public java.lang.String getInstanceDisplayNameFormatter();
```

- *Type:* java.lang.String

---

##### `instanceHostnameFormatter`<sup>Required</sup> <a name="instanceHostnameFormatter" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.instanceHostnameFormatter"></a>

```java
public java.lang.String getInstanceHostnameFormatter();
```

- *Type:* java.lang.String

---

##### `loadBalancers`<sup>Required</sup> <a name="loadBalancers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.loadBalancers"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList getLoadBalancers();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList">DataOciCoreClusterNetworksClusterNetworksInstancePoolsLoadBalancersList</a>

---

##### `placementConfigurations`<sup>Required</sup> <a name="placementConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.placementConfigurations"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList getPlacementConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList</a>

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsOutputReference.property.internalValue"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePools getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePools">DataOciCoreClusterNetworksClusterNetworksInstancePools</a>

---


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList;

new DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.get"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference;

new DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.property.faultDomains">faultDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.property.primarySubnetId">primarySubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.property.primaryVnicSubnets">primaryVnicSubnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.property.secondaryVnicSubnets">secondaryVnicSubnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurations">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `faultDomains`<sup>Required</sup> <a name="faultDomains" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.property.faultDomains"></a>

```java
public java.util.List<java.lang.String> getFaultDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `primarySubnetId`<sup>Required</sup> <a name="primarySubnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.property.primarySubnetId"></a>

```java
public java.lang.String getPrimarySubnetId();
```

- *Type:* java.lang.String

---

##### `primaryVnicSubnets`<sup>Required</sup> <a name="primaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.property.primaryVnicSubnets"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList getPrimaryVnicSubnets();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList</a>

---

##### `secondaryVnicSubnets`<sup>Required</sup> <a name="secondaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.property.secondaryVnicSubnets"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList getSecondaryVnicSubnets();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsOutputReference.property.internalValue"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurations">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurations</a>

---


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList;

new DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference;

new DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6SubnetCidr`<sup>Required</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```java
public java.lang.String getIpv6SubnetCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList;

new DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.get"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference;

new DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.isAssignIpv6Ip">isAssignIpv6Ip</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnets">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList getIpv6AddressIpv6SubnetCidrPairDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `isAssignIpv6Ip`<sup>Required</sup> <a name="isAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.isAssignIpv6Ip"></a>

```java
public IResolvable getIsAssignIpv6Ip();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnetsOutputReference.property.internalValue"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnets getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnets">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsPrimaryVnicSubnets</a>

---


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList;

new DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference;

new DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6SubnetCidr`<sup>Required</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```java
public java.lang.String getIpv6SubnetCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList;

new DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.get"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference <a name="DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference;

new DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.isAssignIpv6Ip">isAssignIpv6Ip</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnets">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList getIpv6AddressIpv6SubnetCidrPairDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `isAssignIpv6Ip`<sup>Required</sup> <a name="isAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.isAssignIpv6Ip"></a>

```java
public IResolvable getIsAssignIpv6Ip();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnetsOutputReference.property.internalValue"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnets getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnets">DataOciCoreClusterNetworksClusterNetworksInstancePoolsPlacementConfigurationsSecondaryVnicSubnets</a>

---


### DataOciCoreClusterNetworksClusterNetworksList <a name="DataOciCoreClusterNetworksClusterNetworksList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksList;

new DataOciCoreClusterNetworksClusterNetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.get"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreClusterNetworksClusterNetworksOutputReference <a name="DataOciCoreClusterNetworksClusterNetworksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksOutputReference;

new DataOciCoreClusterNetworksClusterNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.clusterConfiguration">clusterConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList">DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.hpcIslandId">hpcIslandId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.instancePools">instancePools</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList">DataOciCoreClusterNetworksClusterNetworksInstancePoolsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.networkBlockIds">networkBlockIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.placementConfiguration">placementConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList">DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworks">DataOciCoreClusterNetworksClusterNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterConfiguration`<sup>Required</sup> <a name="clusterConfiguration" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.clusterConfiguration"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList getClusterConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList">DataOciCoreClusterNetworksClusterNetworksClusterConfigurationList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `hpcIslandId`<sup>Required</sup> <a name="hpcIslandId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.hpcIslandId"></a>

```java
public java.lang.String getHpcIslandId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instancePools`<sup>Required</sup> <a name="instancePools" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.instancePools"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksInstancePoolsList getInstancePools();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksInstancePoolsList">DataOciCoreClusterNetworksClusterNetworksInstancePoolsList</a>

---

##### `networkBlockIds`<sup>Required</sup> <a name="networkBlockIds" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.networkBlockIds"></a>

```java
public java.util.List<java.lang.String> getNetworkBlockIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `placementConfiguration`<sup>Required</sup> <a name="placementConfiguration" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.placementConfiguration"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList getPlacementConfiguration();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList">DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksOutputReference.property.internalValue"></a>

```java
public DataOciCoreClusterNetworksClusterNetworks getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworks">DataOciCoreClusterNetworksClusterNetworks</a>

---


### DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList <a name="DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList;

new DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.get"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference <a name="DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference;

new DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.property.placementConstraint">placementConstraint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.property.primarySubnetId">primarySubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.property.primaryVnicSubnets">primaryVnicSubnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList">DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.property.secondaryVnicSubnets">secondaryVnicSubnets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList">DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfiguration">DataOciCoreClusterNetworksClusterNetworksPlacementConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `placementConstraint`<sup>Required</sup> <a name="placementConstraint" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.property.placementConstraint"></a>

```java
public java.lang.String getPlacementConstraint();
```

- *Type:* java.lang.String

---

##### `primarySubnetId`<sup>Required</sup> <a name="primarySubnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.property.primarySubnetId"></a>

```java
public java.lang.String getPrimarySubnetId();
```

- *Type:* java.lang.String

---

##### `primaryVnicSubnets`<sup>Required</sup> <a name="primaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.property.primaryVnicSubnets"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList getPrimaryVnicSubnets();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList">DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList</a>

---

##### `secondaryVnicSubnets`<sup>Required</sup> <a name="secondaryVnicSubnets" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.property.secondaryVnicSubnets"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList getSecondaryVnicSubnets();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList">DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationOutputReference.property.internalValue"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksPlacementConfiguration getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfiguration">DataOciCoreClusterNetworksClusterNetworksPlacementConfiguration</a>

---


### DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList;

new DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference;

new DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6SubnetCidr`<sup>Required</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```java
public java.lang.String getIpv6SubnetCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList <a name="DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList;

new DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.get"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference <a name="DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference;

new DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.isAssignIpv6Ip">isAssignIpv6Ip</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnets">DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList getIpv6AddressIpv6SubnetCidrPairDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `isAssignIpv6Ip`<sup>Required</sup> <a name="isAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.isAssignIpv6Ip"></a>

```java
public IResolvable getIsAssignIpv6Ip();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnetsOutputReference.property.internalValue"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnets getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnets">DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationPrimaryVnicSubnets</a>

---


### DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList <a name="DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList;

new DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference <a name="DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference;

new DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr">ipv6SubnetCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv6SubnetCidr`<sup>Required</sup> <a name="ipv6SubnetCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.ipv6SubnetCidr"></a>

```java
public java.lang.String getIpv6SubnetCidr();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails">DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetails</a>

---


### DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList <a name="DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList;

new DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.get"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference <a name="DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference;

new DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails">ipv6AddressIpv6SubnetCidrPairDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.isAssignIpv6Ip">isAssignIpv6Ip</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnets">DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `ipv6AddressIpv6SubnetCidrPairDetails`<sup>Required</sup> <a name="ipv6AddressIpv6SubnetCidrPairDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.ipv6AddressIpv6SubnetCidrPairDetails"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList getIpv6AddressIpv6SubnetCidrPairDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList">DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsIpv6AddressIpv6SubnetCidrPairDetailsList</a>

---

##### `isAssignIpv6Ip`<sup>Required</sup> <a name="isAssignIpv6Ip" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.isAssignIpv6Ip"></a>

```java
public IResolvable getIsAssignIpv6Ip();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnetsOutputReference.property.internalValue"></a>

```java
public DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnets getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnets">DataOciCoreClusterNetworksClusterNetworksPlacementConfigurationSecondaryVnicSubnets</a>

---


### DataOciCoreClusterNetworksFilterList <a name="DataOciCoreClusterNetworksFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksFilterList;

new DataOciCoreClusterNetworksFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.get"></a>

```java
public DataOciCoreClusterNetworksFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter">DataOciCoreClusterNetworksFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter">DataOciCoreClusterNetworksFilter</a>>

---


### DataOciCoreClusterNetworksFilterOutputReference <a name="DataOciCoreClusterNetworksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_cluster_networks.DataOciCoreClusterNetworksFilterOutputReference;

new DataOciCoreClusterNetworksFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter">DataOciCoreClusterNetworksFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreClusterNetworks.DataOciCoreClusterNetworksFilter">DataOciCoreClusterNetworksFilter</a>

---



