# `dataOciFileStorageOutboundConnectors` Submodule <a name="`dataOciFileStorageOutboundConnectors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFileStorageOutboundConnectors <a name="DataOciFileStorageOutboundConnectors" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors oci_file_storage_outbound_connectors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_outbound_connectors.DataOciFileStorageOutboundConnectors;

DataOciFileStorageOutboundConnectors.Builder.create(Construct scope, java.lang.String id)
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
    .availabilityDomain(java.lang.String)
    .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciFileStorageOutboundConnectorsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#availability_domain DataOciFileStorageOutboundConnectors#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#compartment_id DataOciFileStorageOutboundConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#display_name DataOciFileStorageOutboundConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#id DataOciFileStorageOutboundConnectors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#state DataOciFileStorageOutboundConnectors#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#availability_domain DataOciFileStorageOutboundConnectors#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#compartment_id DataOciFileStorageOutboundConnectors#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#display_name DataOciFileStorageOutboundConnectors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#filter DataOciFileStorageOutboundConnectors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#id DataOciFileStorageOutboundConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#state DataOciFileStorageOutboundConnectors#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciFileStorageOutboundConnectorsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFileStorageOutboundConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_outbound_connectors.DataOciFileStorageOutboundConnectors;

DataOciFileStorageOutboundConnectors.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_outbound_connectors.DataOciFileStorageOutboundConnectors;

DataOciFileStorageOutboundConnectors.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_outbound_connectors.DataOciFileStorageOutboundConnectors;

DataOciFileStorageOutboundConnectors.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_outbound_connectors.DataOciFileStorageOutboundConnectors;

DataOciFileStorageOutboundConnectors.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciFileStorageOutboundConnectors.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciFileStorageOutboundConnectors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciFileStorageOutboundConnectors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciFileStorageOutboundConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFileStorageOutboundConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList">DataOciFileStorageOutboundConnectorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.outboundConnectors">outboundConnectors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList">DataOciFileStorageOutboundConnectorsOutboundConnectorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.filter"></a>

```java
public DataOciFileStorageOutboundConnectorsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList">DataOciFileStorageOutboundConnectorsFilterList</a>

---

##### `outboundConnectors`<sup>Required</sup> <a name="outboundConnectors" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.outboundConnectors"></a>

```java
public DataOciFileStorageOutboundConnectorsOutboundConnectorsList getOutboundConnectors();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList">DataOciFileStorageOutboundConnectorsOutboundConnectorsList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectors.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFileStorageOutboundConnectorsConfig <a name="DataOciFileStorageOutboundConnectorsConfig" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_outbound_connectors.DataOciFileStorageOutboundConnectorsConfig;

DataOciFileStorageOutboundConnectorsConfig.builder()
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
    .availabilityDomain(java.lang.String)
    .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciFileStorageOutboundConnectorsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#availability_domain DataOciFileStorageOutboundConnectors#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#compartment_id DataOciFileStorageOutboundConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#display_name DataOciFileStorageOutboundConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#id DataOciFileStorageOutboundConnectors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#state DataOciFileStorageOutboundConnectors#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#availability_domain DataOciFileStorageOutboundConnectors#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#compartment_id DataOciFileStorageOutboundConnectors#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#display_name DataOciFileStorageOutboundConnectors#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#filter DataOciFileStorageOutboundConnectors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#id DataOciFileStorageOutboundConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#state DataOciFileStorageOutboundConnectors#state}.

---

### DataOciFileStorageOutboundConnectorsFilter <a name="DataOciFileStorageOutboundConnectorsFilter" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_outbound_connectors.DataOciFileStorageOutboundConnectorsFilter;

DataOciFileStorageOutboundConnectorsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#name DataOciFileStorageOutboundConnectors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#values DataOciFileStorageOutboundConnectors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#regex DataOciFileStorageOutboundConnectors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#name DataOciFileStorageOutboundConnectors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#values DataOciFileStorageOutboundConnectors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/file_storage_outbound_connectors#regex DataOciFileStorageOutboundConnectors#regex}.

---

### DataOciFileStorageOutboundConnectorsOutboundConnectors <a name="DataOciFileStorageOutboundConnectorsOutboundConnectors" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_outbound_connectors.DataOciFileStorageOutboundConnectorsOutboundConnectors;

DataOciFileStorageOutboundConnectorsOutboundConnectors.builder()
    .build();
```


### DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_outbound_connectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints;

DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints.builder()
    .build();
```


### DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_outbound_connectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks;

DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFileStorageOutboundConnectorsFilterList <a name="DataOciFileStorageOutboundConnectorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_outbound_connectors.DataOciFileStorageOutboundConnectorsFilterList;

new DataOciFileStorageOutboundConnectorsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.get"></a>

```java
public DataOciFileStorageOutboundConnectorsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a>>

---


### DataOciFileStorageOutboundConnectorsFilterOutputReference <a name="DataOciFileStorageOutboundConnectorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_outbound_connectors.DataOciFileStorageOutboundConnectorsFilterOutputReference;

new DataOciFileStorageOutboundConnectorsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsFilter">DataOciFileStorageOutboundConnectorsFilter</a>

---


### DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_outbound_connectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList;

new DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.get"></a>

```java
public DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_outbound_connectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference;

new DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints">DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsOutputReference.property.internalValue"></a>

```java
public DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints">DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpoints</a>

---


### DataOciFileStorageOutboundConnectorsOutboundConnectorsList <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_outbound_connectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList;

new DataOciFileStorageOutboundConnectorsOutboundConnectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.get"></a>

```java
public DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_outbound_connectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList;

new DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.get"></a>

```java
public DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_outbound_connectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference;

new DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks">DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksOutputReference.property.internalValue"></a>

```java
public DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks">DataOciFileStorageOutboundConnectorsOutboundConnectorsLocks</a>

---


### DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference <a name="DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_file_storage_outbound_connectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference;

new DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.bindDistinguishedName">bindDistinguishedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList">DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.isLockOverride">isLockOverride</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList">DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.passwordSecretVersion">passwordSecretVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectors">DataOciFileStorageOutboundConnectorsOutboundConnectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `bindDistinguishedName`<sup>Required</sup> <a name="bindDistinguishedName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.bindDistinguishedName"></a>

```java
public java.lang.String getBindDistinguishedName();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.endpoints"></a>

```java
public DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList getEndpoints();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList">DataOciFileStorageOutboundConnectorsOutboundConnectorsEndpointsList</a>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.isLockOverride"></a>

```java
public IResolvable getIsLockOverride();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.locks"></a>

```java
public DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList getLocks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList">DataOciFileStorageOutboundConnectorsOutboundConnectorsLocksList</a>

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

---

##### `passwordSecretVersion`<sup>Required</sup> <a name="passwordSecretVersion" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.passwordSecretVersion"></a>

```java
public java.lang.Number getPasswordSecretVersion();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectorsOutputReference.property.internalValue"></a>

```java
public DataOciFileStorageOutboundConnectorsOutboundConnectors getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFileStorageOutboundConnectors.DataOciFileStorageOutboundConnectorsOutboundConnectors">DataOciFileStorageOutboundConnectorsOutboundConnectors</a>

---



