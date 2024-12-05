# `dataOciWafNetworkAddressLists` Submodule <a name="`dataOciWafNetworkAddressLists` Submodule" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciWafNetworkAddressLists <a name="DataOciWafNetworkAddressLists" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists oci_waf_network_address_lists}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_network_address_lists.DataOciWafNetworkAddressLists;

DataOciWafNetworkAddressLists.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciWafNetworkAddressListsFilter>)
//  .id(java.lang.String)
//  .state(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#compartment_id DataOciWafNetworkAddressLists#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#display_name DataOciWafNetworkAddressLists#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter">DataOciWafNetworkAddressListsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#id DataOciWafNetworkAddressLists#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.state">state</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#state DataOciWafNetworkAddressLists#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#compartment_id DataOciWafNetworkAddressLists#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#display_name DataOciWafNetworkAddressLists#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter">DataOciWafNetworkAddressListsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#filter DataOciWafNetworkAddressLists#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#id DataOciWafNetworkAddressLists#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.Initializer.parameter.state"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#state DataOciWafNetworkAddressLists#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciWafNetworkAddressListsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter">DataOciWafNetworkAddressListsFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciWafNetworkAddressLists resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_network_address_lists.DataOciWafNetworkAddressLists;

DataOciWafNetworkAddressLists.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_network_address_lists.DataOciWafNetworkAddressLists;

DataOciWafNetworkAddressLists.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_network_address_lists.DataOciWafNetworkAddressLists;

DataOciWafNetworkAddressLists.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_network_address_lists.DataOciWafNetworkAddressLists;

DataOciWafNetworkAddressLists.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciWafNetworkAddressLists.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciWafNetworkAddressLists resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciWafNetworkAddressLists to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciWafNetworkAddressLists that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciWafNetworkAddressLists to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList">DataOciWafNetworkAddressListsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.networkAddressListCollection">networkAddressListCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList">DataOciWafNetworkAddressListsNetworkAddressListCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter">DataOciWafNetworkAddressListsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.stateInput">stateInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.state">state</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.filter"></a>

```java
public DataOciWafNetworkAddressListsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList">DataOciWafNetworkAddressListsFilterList</a>

---

##### `networkAddressListCollection`<sup>Required</sup> <a name="networkAddressListCollection" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.networkAddressListCollection"></a>

```java
public DataOciWafNetworkAddressListsNetworkAddressListCollectionList getNetworkAddressListCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList">DataOciWafNetworkAddressListsNetworkAddressListCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter">DataOciWafNetworkAddressListsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.stateInput"></a>

```java
public java.util.List<java.lang.String> getStateInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.state"></a>

```java
public java.util.List<java.lang.String> getState();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressLists.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciWafNetworkAddressListsConfig <a name="DataOciWafNetworkAddressListsConfig" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_network_address_lists.DataOciWafNetworkAddressListsConfig;

DataOciWafNetworkAddressListsConfig.builder()
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
//  .filter(java.util.List<DataOciWafNetworkAddressListsFilter>)
//  .id(java.lang.String)
//  .state(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#compartment_id DataOciWafNetworkAddressLists#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#display_name DataOciWafNetworkAddressLists#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter">DataOciWafNetworkAddressListsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#id DataOciWafNetworkAddressLists#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.state">state</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#state DataOciWafNetworkAddressLists#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#compartment_id DataOciWafNetworkAddressLists#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#display_name DataOciWafNetworkAddressLists#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter">DataOciWafNetworkAddressListsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#filter DataOciWafNetworkAddressLists#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#id DataOciWafNetworkAddressLists#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsConfig.property.state"></a>

```java
public java.util.List<java.lang.String> getState();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#state DataOciWafNetworkAddressLists#state}.

---

### DataOciWafNetworkAddressListsFilter <a name="DataOciWafNetworkAddressListsFilter" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_network_address_lists.DataOciWafNetworkAddressListsFilter;

DataOciWafNetworkAddressListsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#name DataOciWafNetworkAddressLists#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#values DataOciWafNetworkAddressLists#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#regex DataOciWafNetworkAddressLists#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#name DataOciWafNetworkAddressLists#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#values DataOciWafNetworkAddressLists#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/waf_network_address_lists#regex DataOciWafNetworkAddressLists#regex}.

---

### DataOciWafNetworkAddressListsNetworkAddressListCollection <a name="DataOciWafNetworkAddressListsNetworkAddressListCollection" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_network_address_lists.DataOciWafNetworkAddressListsNetworkAddressListCollection;

DataOciWafNetworkAddressListsNetworkAddressListCollection.builder()
    .build();
```


### DataOciWafNetworkAddressListsNetworkAddressListCollectionItems <a name="DataOciWafNetworkAddressListsNetworkAddressListCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_network_address_lists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItems;

DataOciWafNetworkAddressListsNetworkAddressListCollectionItems.builder()
    .build();
```


### DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddresses <a name="DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddresses" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddresses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddresses.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_network_address_lists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddresses;

DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddresses.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciWafNetworkAddressListsFilterList <a name="DataOciWafNetworkAddressListsFilterList" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_network_address_lists.DataOciWafNetworkAddressListsFilterList;

new DataOciWafNetworkAddressListsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.get"></a>

```java
public DataOciWafNetworkAddressListsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter">DataOciWafNetworkAddressListsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter">DataOciWafNetworkAddressListsFilter</a>>

---


### DataOciWafNetworkAddressListsFilterOutputReference <a name="DataOciWafNetworkAddressListsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_network_address_lists.DataOciWafNetworkAddressListsFilterOutputReference;

new DataOciWafNetworkAddressListsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter">DataOciWafNetworkAddressListsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsFilter">DataOciWafNetworkAddressListsFilter</a>

---


### DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList <a name="DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_network_address_lists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList;

new DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.get"></a>

```java
public DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference <a name="DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_network_address_lists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference;

new DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.addresses">addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.vcnAddresses">vcnAddresses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList">DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItems">DataOciWafNetworkAddressListsNetworkAddressListCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.addresses"></a>

```java
public java.util.List<java.lang.String> getAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vcnAddresses`<sup>Required</sup> <a name="vcnAddresses" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.vcnAddresses"></a>

```java
public DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList getVcnAddresses();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList">DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciWafNetworkAddressListsNetworkAddressListCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItems">DataOciWafNetworkAddressListsNetworkAddressListCollectionItems</a>

---


### DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList <a name="DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_network_address_lists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList;

new DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.get"></a>

```java
public DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference <a name="DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_network_address_lists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference;

new DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.property.addresses">addresses</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.property.vcnId">vcnId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddresses">DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.property.addresses"></a>

```java
public java.lang.String getAddresses();
```

- *Type:* java.lang.String

---

##### `vcnId`<sup>Required</sup> <a name="vcnId" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.property.vcnId"></a>

```java
public java.lang.String getVcnId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddressesOutputReference.property.internalValue"></a>

```java
public DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddresses getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddresses">DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsVcnAddresses</a>

---


### DataOciWafNetworkAddressListsNetworkAddressListCollectionList <a name="DataOciWafNetworkAddressListsNetworkAddressListCollectionList" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_network_address_lists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList;

new DataOciWafNetworkAddressListsNetworkAddressListCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.get"></a>

```java
public DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference <a name="DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_waf_network_address_lists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference;

new DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList">DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollection">DataOciWafNetworkAddressListsNetworkAddressListCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.property.items"></a>

```java
public DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList">DataOciWafNetworkAddressListsNetworkAddressListCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollectionOutputReference.property.internalValue"></a>

```java
public DataOciWafNetworkAddressListsNetworkAddressListCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciWafNetworkAddressLists.DataOciWafNetworkAddressListsNetworkAddressListCollection">DataOciWafNetworkAddressListsNetworkAddressListCollection</a>

---



